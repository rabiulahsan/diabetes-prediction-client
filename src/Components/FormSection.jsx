import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    smoking: "",
    hypertension: "",
    heart_disease: "",
    bmi: "",
    hemoglobin_level: "",
    blood_glucose_level: "",
  });

  const [predictionResult, setPredictionResult] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false); // Trigger for fetch request

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShouldFetch(true); // Trigger the fetch on form submission
  };

  useEffect(() => {
    if (!shouldFetch) return;

    const fetchLoanAmount = async () => {
      const promise = fetch(
        "https://diabetes-prediction-model-1fmm.onrender.com/predictdata",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      ).then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch loan amount");
        }
        return await response.json();
      });

      toast.promise(
        promise,
        {
          pending: "Predicting Diabetes of user",
          success: "Predicting Health condition successfully 🎉",
          error: "Failed to predict condtion of Health. 😞",
        },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      try {
        const result = await promise;
        setPredictionResult(result.result); // Update state with the loan amount
        console.log(result);
      } catch (error) {
        console.error("Error submitting data:", error);
      } finally {
        setShouldFetch(false); // Reset trigger
      }
    };

    fetchLoanAmount();
  }, [shouldFetch, formData]);

  return (
    <div className=" bg-gray-100 flex items-center justify-center py-[5%]">
      <div className="bg-white shadow-lg rounded-lg p-[4%]  max-w-lg w-full">
        <h1 className="text-2xl font-bold text-green-500 mb-6 text-center">
          Diabetes Prediction Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="mb-5">
            <label className="block text-slate-500">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-style"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-slate-500 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="input-style bg-transparent"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Age */}
          <div className="mb-5">
            <label className="block text-slate-500">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="input-style"
            />
          </div>

          {/* Smoking */}
          <div>
            <label className="block text-slate-500 mb-1">Smoking Status</label>
            <select
              name="smoking"
              value={formData.smoking}
              onChange={handleChange}
              required
              className="input-style bg-transparent"
            >
              <option value="" disabled>
                Select Smoking Status
              </option>
              <option value="non_smoker">Non-Smoker</option>
              <option value="current_smoker">Current Smoker</option>
              <option value="former_smoker">Former Smoker</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          {/* Hypertension */}
          <div className="flex items-center gap-x-4">
            <label className="block text-slate-500 mb-1">Hypertension</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="hypertension"
                  value="1"
                  checked={formData.hypertension === "1"}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-green-500 focus:ring-green-500"
                />
                <span className="text-slate-600 font-semibold">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="hypertension"
                  value="0"
                  checked={formData.hypertension === "0"}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-green-500 focus:ring-green-500"
                />
                <span className="text-slate-600 font-semibold">No</span>
              </label>
            </div>
          </div>

          {/* Heart Disease */}
          <div className="flex items-center gap-x-4">
            <label className="block text-slate-500 mb-1">Heart Disease</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="heart_disease"
                  value="1"
                  checked={formData.heart_disease === "1"}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-green-500 focus:ring-green-500"
                />
                <span className="text-slate-600 font-semibold">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="heart_disease"
                  value="0"
                  checked={formData.heart_disease === "0"}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-green-500 focus:ring-green-500"
                />
                <span className="text-slate-600 font-semibold">No</span>
              </label>
            </div>
          </div>

          {/* BMI */}
          <div className="mb-5">
            <label className="block text-slate-500">BMI</label>
            <input
              type="number"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
              step="0.1"
              required
              className="input-style"
            />
          </div>

          {/* Hemoglobin Level */}
          <div className="mb-5">
            <label className="block text-slate-500">
              HbA1c (Hemoglobin A1C)
            </label>
            <input
              type="number"
              name="hemoglobin_level"
              value={formData.hemoglobin_level}
              onChange={handleChange}
              step="0.1"
              required
              className="input-style"
            />
          </div>

          {/* Blood Glucose Level */}
          <div className="mb-5">
            <label className="block text-slate-500">
              Blood Glucose Level (mg/dL)
            </label>
            <input
              type="number"
              name="blood_glucose_level"
              value={formData.blood_glucose_level}
              onChange={handleChange}
              step="0.1"
              required
              className="input-style"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-7 my-5 rounded-sm"
            >
              Check Diabetes
            </button>
          </div>
        </form>

        {/* Result */}
        {predictionResult !== null && (
          <div className="mt-6 text-center ">
            <p className="text-slate-500 font-semibold text-lg">
              The patient{" "}
              <span className="text-lg font-bold text-green-500">
                {predictionResult}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSection;
