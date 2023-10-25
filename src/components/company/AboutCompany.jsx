import SuggestBtn from "./SuggestBtn";

const AboutCompany = () => {
  return (
    <div className="w-11/12 m-auto mt-4">
      <h1 className="text-xl font-semibold">Microsoft Overview</h1>
      <table class="table-auto w-full text-gray-700 mt-4">
        <tbody className="flex flex-wrap justify-between leading-8">
          <tr className="w-full lg:w-[48%]">
            <td class="font-bold pr-4">Website:</td>
            <td>
              <a
                href="https://www.microsoft.com/en-in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold"
              >
                www.microsoft.com/en-in/
              </a>
            </td>
          </tr>
          <tr className="w-full lg:w-[48%]">
            <td className="font-bold pr-4">Size:</td>
            <td>10000+ Employees</td>
          </tr>
          <tr className="w-full lg:w-[48%]">
            <td className="font-bold pr-4 ">Founded:</td>
            <td>1975</td>
          </tr>
          <tr className="w-full lg:w-[48%]">
            <td className="font-bold pr-4">Industry:</td>
            <td>
              {/* Computer Hardware Development
               */}
              <SuggestBtn />
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-700 mt-4">
        Microsoft is the ideal place for people who have passion for their work
        and the desire to make an impact—in their careers, in the community and
        on the world. Microsoft is a unique company; and not just within the
        tech industry. Here, smart people thrive on their own terms and push
        their intelligence to its limit. The variety of job opportunities and
        career advancement at Microsoft is incredible and empowers you to
        constantly challenge yourself and chart your own course.
      </p>
    </div>
  );
};

export default AboutCompany;
