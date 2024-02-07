import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div className="">Statictis</div>
      <div className="">Today&apos;s activitis</div>
      <div className="">Chart stay duration</div>
      <div className="">Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
