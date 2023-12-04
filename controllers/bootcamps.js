const asyncHandler = require("./../middleware/async")
const ErrorResponse = require("./../utils/errorResponse")
const Bootcamp = require("./../models/Bootcamp")

// @desc        Get all bootcamps
// @route       Get /api/bootcamps
// @access      Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const data = await Bootcamp.find();
  res.status(200).json({
    success: true,
    count: data.length,
    data
  })
})

// @desc        Get single bootcamp
// @route       Get /api/bootcamp/:id
// @access      Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const data = await Bootcamp.findById(req.params.id)
  if (!data) {
    return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404))
  }

  res.status(200).json({
    success: true,
    data
  })
})

// @desc        Create bootcamp
// @route       Post /api/bootc amp
// @access      private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body)

  res.status(201).json({
    success: true,
    data: bootcamp
  })
})

// @desc        Update bootcamp
// @route       Put /api/bootcamp/:id
// @access      private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {

  let data = await Bootcamp.findById(req.params.id)

  if (!data) {
    return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404))
  }

  data = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  res.status(200).json({
    success: true,
    message: "Resource Updated",
    data
  })
})

// @desc        Delete bootcamp
// @route       Delete /api/bootcamp/:id
// @access      private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  let data = await Bootcamp.findById(req.params.id)
  if (!data) {
    return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`))
  }
  await Bootcamp.findByIdAndDelete(req.params.id)
  res.status(200).json({
    success: true,
    message: "Resource deleted"
  })
})

