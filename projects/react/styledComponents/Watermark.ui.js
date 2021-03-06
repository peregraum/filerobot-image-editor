import styled from 'styled-components';


const WatermarkWrapper = styled.div`
  position: relative;
  color: ${props => props.theme.colors.text};
  text-align: left;
  white-space: normal;
  
  .image-editor-range {
    display: inline-block;
    padding: 5px;
    vertical-align: middle;
  
    :after {
      display: none;
    }
    
    label {
      display: none;
    }
  }
`;

const WrapperForURL = styled('div')`
  padding: 10px;
  
  label {
    min-width: 100px;
    display: inline-block;
    vertical-align: middle;
    margin: 0;
  }
  
  input {
    width: calc(100% - 100px);
  }
`;

const WrapperForOpacity = styled('div')`
  padding: 10px;

  label {
    min-width: 100px;
    display: inline-block;
    vertical-align: middle;
  }
  
  .cloudimage-url-generator-switch {
    margin-left: 100px;
    margin-top: -6px;
    
    label {
      min-width: auto;
    }
  }
`;

const WatermarkInputs = styled('div')`
  width: calc(100% - 100px);
  display: inline-block;
  vertical-align: top;
`;

const WatermarkPositionWrapper = styled('div')`
  width: 100px;
  padding: 5px;
  display: inline-block;
  font-size: 0;
  
  div:nth-child(1) {
    border-radius: 4px 0 0 0;
  }
  
  div:nth-child(3) {
    border-radius: 0 4px 0 0;
  }
  
  div:nth-child(7) {
    border-radius: 0 0 0 4px;
  }
  
  div:nth-child(9) {
    border-radius: 0 0 4px 0;
  }
`;

const PositionSquare = styled('div')`
  width: 30px;
  height: 30px;
  display: inline-block;
  border: 1px solid ${p => p.theme.colors.secondaryBgHover};
  background: ${p => p.active ? p.theme.colors.accent : p.theme.colors.secondaryBg};
  cursor: pointer;
  
  :hover {
    background: ${p => p.theme.colors.primaryBg};
  }
`;

const SelectWatermarkLabel = styled('div')`
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px;
  cursor: pointer;
`;

const Watermarks = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 100px;
  background: ${p => p.theme.colors.secondaryBg};
`;

const WatermarkIcon = styled('div')`
  width: 200px;
  height: 70px;
  display: inline-block;
  vertical-align: middle;
  background: ${p => p.theme.colors.primaryBgHover} url(${p => p.src}) 50% 50% / contain no-repeat; 
  margin: 10px;
  padding: 20px;
  border-radius: 4px;
  cursor: pointer;
  
  :hover {
    background-color: ${p => p.theme.colors.secondaryBgHover};
  }
`;


export { WatermarkWrapper, WrapperForURL, WrapperForOpacity, WatermarkInputs, WatermarkPositionWrapper,
  PositionSquare, SelectWatermarkLabel, Watermarks, WatermarkIcon
};