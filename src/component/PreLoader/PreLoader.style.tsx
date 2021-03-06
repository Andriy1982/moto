import styled, {keyframes} from 'styled-components';

type TProps = {
  sizePreloader: string;
};

const Box = styled.div`
  min-height: calc(100vh - (71px + 56px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loader = styled.div<TProps>`
  position: relative;
  width: ${(props) => props.sizePreloader};
  height: ${(props) => props.sizePreloader};
  margin: 0 auto;
  perspective: 780px;
`;

const Inner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
`;

const rotateOne = keyframes`
	0% {
		transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
`;

const rotateTwo = keyframes`
	0% {
		transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
	}
`;

const rotateThree = keyframes`
	0% {
		transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
	}
`;

const One = styled(Inner)`
  left: 0%;
  top: 0%;
  animation: ${rotateOne} 1.15s linear infinite;
  border-bottom: 3px solid #5c5edc;
`;

const Two = styled(Inner)`
  right: 0%;
  top: 0%;
  animation: ${rotateTwo} 1.15s linear infinite;
  border-right: 3px solid rgba(76, 70, 101, 0.99);
`;

const Three = styled(Inner)`
  right: 0%;
  bottom: 0%;
  animation: ${rotateThree} 1.15s linear infinite;
  border-top: 3px solid rgb(233, 144, 138);
`;

export {Loader, One, Two, Three, Box};
