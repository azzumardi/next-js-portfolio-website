import mongoose from "mongoose";

const DegreeSchema = new mongoose.Schema(
  {
    degree: String,
    //   institution: String,
    year: String,
    college: String,
  },
  { timestamps: true }
);

const Degree = mongoose.models.Degree || mongoose.model("Degree", DegreeSchema);

export default Degree;
