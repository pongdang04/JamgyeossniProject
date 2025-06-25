"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

function SideBar() {
  const SidebarContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 50;
    background-color: #78350f;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
  `;

  const SidebarButton = styled.button`
    padding: 0.5rem;
    margin: 0.25rem 0;
    color: white;
    background-color: transparent;
    border-radius: 0.375rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #92400e; /* amber-800 */
    }
  `;
  const router = useRouter();

  const handleRoadSearch = () => {
    router.push("/RoadSearch");
  };

  const handleBusSearch = () => {
    router.push("/BusSearch");
  };

  const handleSubwaySearch = () => {
    router.push("/SubwaySearch");
  };

  return (
    <SidebarContainer>
      <SidebarButton onClick={handleRoadSearch}>도로 검색</SidebarButton>
      <SidebarButton onClick={handleBusSearch}>버스 검색</SidebarButton>
      <SidebarButton onClick={handleSubwaySearch}>지하철 검색</SidebarButton>
    </SidebarContainer>
  );
}

export default SideBar;
