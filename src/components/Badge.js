const Badge = ({ company_type, company_badge_color }) => {
  let style = `rounded-sm text-sm bg-${company_badge_color}-300 text-${company_badge_color}-900 shadow-md shadow-${company_badge_color}-200 w-1/4 p-1 px-2 text-center`;
  return (
    <>
      <p className={style}>{company_type}</p>
    </>
  );
};

export default Badge;
