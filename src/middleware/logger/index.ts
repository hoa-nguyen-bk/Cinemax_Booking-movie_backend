const logger = (req: { method: any; originalUrl: any; },_res: any,next: () => void) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next()
}

module.exports = {
  logger
}