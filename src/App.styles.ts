import styled from "styled-components";
import { Button } from 'antd';
import 'antd/dist/antd.less';
// todo: find the way to import antd design css

export const Wrapper = styled.div`
    margin: 40px;
`;

export const StyledButton = styled(Button)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`