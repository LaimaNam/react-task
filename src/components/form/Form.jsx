import styled from 'styled-components';

//components
import FormBottom from './FormBottom';
import FormTop from './FormTop';

const Form = () => {
  return (
    <Wrapper>
      <FormTop />
      <h3>Or</h3>
      <FormBottom />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 10px;
`;
