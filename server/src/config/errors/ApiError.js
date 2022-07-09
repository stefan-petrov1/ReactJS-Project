export class ApiError {
  constructor(status, message) {
    if (!status) {
      throw new Error('Status code is required!');
    }

    if (!message?.length) {
      throw new Error('Message is required!');
    }

    this.status = status;
    this.message = message;
  }

  static internal() {
    return new ApiError(500, 'Internal Server Error');
  }

  static badRequest(message) {
    return new ApiError(400, message);
  }
}
