const Footer = () => {
  let date = new Date();
  return (
    <div className="w-full bg-blue-950">
      <h1 className="text-white p-8 text-lg">
        @compyright CareerHub {date.getFullYear()} all right reserved.
      </h1>
    </div>
  );
};

export default Footer;
