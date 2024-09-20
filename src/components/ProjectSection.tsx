import styled from '@emotion/styled';
import kuphil_web from '../assets/thumbnail/kuphil_web.png';
import color_me from '../assets/thumbnail/color_me.png';
import yorizori from '../assets/thumbnail/yorizori.png';
import duyeons_portfolio from '../assets/thumbnail/duyeons_portfolio.png';
import soool_with_wine from '../assets/thumbnail/soool_with_wine.png';
import ProjectItem from './project/ProjectItem';
import IntersectionObserver from './IntersectionObserver';
import KuphilWeb from './troubleshooting/KuphilWeb';
import ColorMe from './troubleshooting/ColorMe';
import SooolWithWine from './troubleshooting/SooolWithWine';

const ProjectContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
`;
const ProjectTitle = styled.p`
  color: ${(props) => props.theme.color};
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 20px;

  @media (min-width: 640px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
// const NavSticky = styled.div`
//   position: sticky;
//   top: 0;
//   z-index: 2;
//   background-color: ${(props) => props.theme.bg};
// `;
const Line = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color};
  height: 2px;
`;
// const ProjectNav = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   border-left: 1px solid black;
// `;
// const ProjectNavItem = styled.div`
//   width: 100%;
//   height: 60px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-sizing: border-box;
//   border-bottom: 1px solid black;
//   border-right: 1px solid black;
//   &:hover {
//     cursor: pointer;
//   }
// `;

const ProjectSection = () => {
  // const projectArr = [
  //   'Kuphil Web',
  //   'Color, me',
  //   '요리조리',
  //   'Duyeon`s Portfolio',
  //   'Soool with Wine',
  // ];

  return (
    <ProjectContainer>
      <ProjectTitle>Project</ProjectTitle>
      <Line />
      {/* <NavSticky>
        <Line />
        <ProjectNav>
          {projectArr.map((v, i) => (
            <ProjectNavItem key={i}>{v}</ProjectNavItem>
          ))}
        </ProjectNav>
      </NavSticky> */}
      <div>
        <IntersectionObserver>
          <ProjectItem
            index={0}
            thumbnail={kuphil_web}
            Troubleshooting={KuphilWeb}
          />
        </IntersectionObserver>
        <IntersectionObserver>
          <ProjectItem
            index={1}
            thumbnail={color_me}
            Troubleshooting={ColorMe}
          />
        </IntersectionObserver>
        <IntersectionObserver>
          <ProjectItem index={2} thumbnail={yorizori} Troubleshooting={null} />
        </IntersectionObserver>
        <IntersectionObserver>
          <ProjectItem
            index={3}
            thumbnail={duyeons_portfolio}
            Troubleshooting={null}
          />
        </IntersectionObserver>
        <IntersectionObserver>
          <ProjectItem
            index={4}
            thumbnail={soool_with_wine}
            Troubleshooting={SooolWithWine}
          />
        </IntersectionObserver>
      </div>
    </ProjectContainer>
  );
};

export default ProjectSection;
