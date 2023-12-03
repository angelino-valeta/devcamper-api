// @desc        Get all bootcamps
// @route       Get /api/bootcamps
// @access      Public

exports.getBootcamps = (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Show all bootcamps"
  })
}

// @desc        Get single bootcamp
// @route       Get /api/bootcamp/:id
// @access      Public
exports.getBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamps ${req.params.id}`
  })
}


// @desc        Create bootcamp
// @route       Post /api/bootcamp
// @access      private
exports.createBootcamp = (req, res) => {
  res.status(201).json({
    success: true,
    msg: "Create new bootcamp"
  })
}


// @desc        Update bootcamp
// @route       Put /api/bootcamp/:id
// @access      private
exports.updateBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp ${req.params.id}`
  })
}


// @desc        Delete bootcamp
// @route       Delete /api/bootcamp/:id
// @access      private
exports.deleteBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamps ${req.params.id}`
  })
}

