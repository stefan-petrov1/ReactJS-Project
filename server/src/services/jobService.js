import mongoose from 'mongoose';
import { ApiError } from '../config/errors/ApiError.js';
import { Job } from '../models/Job.js';

const defaultRecentCount = 5;

function getAll() {
  return Job.find();
}

function getRecent(count) {
  const jobCount = count || defaultRecentCount;

  if (count) {
    if (isNaN(count)) {
      throw ApiError.badRequest('Count must be a number');
    }

    if (Number(count) < 1) {
      throw ApiError.badRequest('Count must be a positive number');
    }
  }

  return Job.find().sort({ _id: -1 }).limit(jobCount);
}

async function getById(id) {
  if (!mongoose.isValidObjectId(id)) {
    throw ApiError.badRequest('Invalid Job ID');
  }

  const job = await Job.findById(id);

  if (!job) {
    throw ApiError.badRequest('No job was found with the given ID');
  }

  return job;
}

function create(data) {
  return Job.create(data);
}

async function update(id, data, currentUserId) {
  if (typeof data !== 'object' || Array.isArray(data)) {
    throw ApiError.badRequest('Invalid body');
  }

  const jobDoc = await getById(id);

  if (jobDoc.owner != currentUserId) {
    throw ApiError.badRequest('Only owner can update the job');
  }

  const { acknowledged } = await jobDoc.updateOne(data, {
    runValidators: true,
  });

  return acknowledged;
}

async function deleteJob(id, currentUserId) {
  const jobDoc = await getById(id);

  if (jobDoc.owner != currentUserId) {
    throw ApiError.badRequest('Only owner can delete the job');
  }

  await jobDoc.delete();
}

export const jobService = {
  getAll,
  getRecent,
  getById,
  create,
  update,
  deleteJob,
};
