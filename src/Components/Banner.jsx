const Banner = () => {
  return (
    <div className="max-w-5xl mx-auto px-[5%] py-[4%] bg-gray-100 rounded-lg shadow-lg my-[5%]">
      <div className="">
        <h1 className="heading-style">Predict Diabetes System</h1>
        <p className="text-slate-600 mb-3">
          This end-to-end machine learning project aims to predict whether a
          user has diabetes based on their input data. The system focuses on
          classification tasks to determine diabetes risk.
        </p>
      </div>
      <h2 className="heading-style">Key Features:</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>
          <strong>Exploratory Data Analysis (EDA):</strong> Uncovered patterns
          and insights in the training data.
        </li>
        <li>
          <strong>Data Preprocessing:</strong> Handled missing values and
          transformed user data into meaningful categories.
        </li>
        <li>
          <strong>Pipeline Creation:</strong> Built efficient machine learning
          pipelines for classification tasks.
        </li>
        <li>
          <strong>Exception Handling & Logging:</strong> Implemented robust
          mechanisms to handle errors and log activities.
        </li>
        <li>
          <strong>Model Development:</strong> Utilized scikit-learn for
          classification tasks.
        </li>
        <li>
          <strong>API Deployment:</strong> Deployed the model using a Flask API.
        </li>
        <li>
          <strong>CI/CD Integration:</strong> Implemented continuous integration
          and deployment using GitHub Actions.
        </li>
        <li>
          <strong>Deployment Platform:</strong> Model deployed on Render for
          reliable hosting.
        </li>
      </ul>
      <h2 className="heading-style">Technologies Used:</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>
          <strong>Languages:</strong> Python
        </li>
        <li>
          <strong>Libraries:</strong> scikit-learn, pandas, NumPy, matplotlib,
          seaborn
        </li>
        <li>
          <strong>Framework:</strong> Flask
        </li>
        <li>
          <strong>CI/CD:</strong> GitHub Actions
        </li>
        <li>
          <strong>Deployment:</strong> Render
        </li>
      </ul>
      <h2 className="heading-style">Use Cases:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Early Diabetes Detection:</strong> Provides users with an
          instant prediction of their diabetes risk.
        </li>
        <li>
          <strong>Enhancing Healthcare Decisions:</strong> Helps users take
          preventive measures based on early insights.
        </li>
        <li>
          <strong>Improving User Experience:</strong> Offers quick and accurate
          predictions through a user-friendly interface.
        </li>
        <li>
          <strong>Scalability:</strong> Handles multiple user inputs efficiently
          for large-scale deployment.
        </li>
      </ul>
      <p className="text-green-600 text-center font-semibold mt-[4%]">
        This project demonstrates practical ML applications in healthcare,
        covering data preprocessing, model evaluation, and deployment.
      </p>
      <div className="flex items-center justify-center">
        <button className="px-5 py-3 mt-5 font-semibold bg-green-500 text-white rounded-sm hover:bg-green-600">
          <a
            href="https://github.com/yourusername/diabetes-prediction-model"
            target="blank"
          >
            Model Repository
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
