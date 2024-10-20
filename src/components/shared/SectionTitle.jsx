/* eslint-disable react/prop-types */
const SectionTitle = ({ title, value }) => {
  return (
    <h2
      className={`text-4xl text-center relative font-bold ${
        value ? "my-0 mb-0" : "my-20"
      }`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
