


import User from '../models/UserSchema.js'

export const updatedUser = async (req,res) => {
  const id = req.params.id;

    
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {$set: req.body },
      {new: true}
    )

    res.status(200).json({
      success: true,
      message: "Successfully user created",
      data: updatedUser
    })
  } catch (error) {
    res.status(500).json({ success: false, message:"Failed to update"})
  }
}



export const deleteUser = async (req,res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(
      id
    )

    res.status(200).json({
      success: true,
      message: "Successfully user deleted",
    })
  } catch (error) {
    res.status(500).json({ success: false, message:"Failed to delete"})
  }
}



export const getSingleUser = async (req,res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(
      id
    ).select("-password")

    res.status(200).json({
      success: true,
      message: "Successfully user found",
      data: user
    })
  } catch (error) {
    res.status(400).json({ success: false, message:"no user found"})
  }
}
export const getAllUser = async (req,res) => {

  try {
    const users = await User.find().select("-password")

    res.status(200).json({
      success: true,
      message: "Successfully users found",
      data: users
    })
  } catch (error) {
    res.status(400).json({ success: false, message:"not found"})
  }
}