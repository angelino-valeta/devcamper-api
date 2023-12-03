const Bootcamp = require("./../models/Bootcamp")

// @desc        Get all bootcamps
// @route       Get /api/bootcamps
// @access      Public

exports.getBootcamps = async (req, res) => {

  try {
    const data = await Bootcamp.find();

    res.status(200).json({
      success: true,
      count: data.length,
      data
    })

  } catch (err) {
    res.status(400).json({ success: false })
  }


}

// @desc        Get single bootcamp
// @route       Get /api/bootcamp/:id
// @access      Public
exports.getBootcamp = async (req, res) => {

  try {

    const data = await Bootcamp.findById(req.params.id)

    if (!data) {
      return res.status(404).json({ success: false, message: "Resource not found" })
    }

    res.status(200).json({
      success: true,
      data
    })
  } catch (err) {
    res.status(500).json({ success: false })
  }
}


// @desc        Create bootcamp
// @route       Post /api/bootc amp
// @access      private
exports.createBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)

    res.status(201).json({
      success: true,
      data: bootcamp
    })

  } catch (err) {
    res.status(400).json({
      success: false,
      error: err
    })
  }
}


// @desc        Update bootcamp
// @route       Put /api/bootcamp/:id
// @access      private
exports.updateBootcamp = async (req, res) => {

  try {

    let data = await Bootcamp.findById(req.params.id)

    if (!data) {
      return res.status(404).json({ success: false, message: "Resource not found" })
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

  } catch (err) {
    res.status(500).json({ success: false, err})
  }

}


// @desc        Delete bootcamp
// @route       Delete /api/bootcamp/:id
// @access      private
exports.deleteBootcamp = async (req, res) => {

  try {

    let data = await Bootcamp.findById(req.params.id)

    if (!data) {
      return res.status(404).json({ success: false, message: "Resource not found" })
    }

    data = await Bootcamp.findByIdAndDelete(req.params.id)

    res.status(200).json({
      success: true,
      message: "Resource deleted"
    })

  } catch (err) {
    res.status(500).json({ success: false })
  }

}

