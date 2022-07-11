import { ApiError } from '../config/errors/ApiError.js';
import { jobService } from '../services/jobService.js';

async function getAll(req, res, next) {
  try {
    const jobs = transform(await jobService.getAll().lean());
    res.status(200).json({ jobs });
  } catch (e) {
    next(e);
  }
}

async function getRecent(req, res, next) {
  try {
    const jobs = transform(await jobService.getRecent(req.body.count).lean());

    res.status(200).json({ jobs });
  } catch (e) {
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const jobDoc = await jobService.getById(req.params.id);

    res.status(200).json({ job });
  } catch (e) {
    next(e);
  }
}

async function create(req, res, next) {
  try {
    const jobData = {
      ...req.body,
      owner: req.user._id,
    };

    const job = transform((await jobService.create(jobData)).toObject());

    res.status(200).json({ job });
  } catch (e) {
    next(e);
  }
}

async function updateById(req, res, next) {
  try {
    const acknowledged = await jobService.update(
      req.params.id,
      req.body,
      req.user._id
    );

    if (!acknowledged) {
      throw ApiError.badRequest('Update Failed');
    }

    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
}

async function deleteById(req, res, next) {
  try {
    await jobService.deleteJob(req.params.id, req.user._id);

    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
}

function transform(jobs) {
  if (Array.isArray(jobs)) {
    return jobs.map(getPublicData);
  }

  return getPublicData(jobs);
}

function getPublicData(job) {
  const { __v, ...jobData } = job;
  return jobData;
}

export const jobController = {
  getAll,
  getRecent,
  getById,
  create,
  updateById,
  deleteById,
};
