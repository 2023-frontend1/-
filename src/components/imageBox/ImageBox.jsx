import ImgBox from "./ImageBox.styles"

const ImageBox = ({ boxshape, size, src, ...rest }) => {
  return <ImgBox $boxshape={boxshape} $size={size} src={src} {...rest} />
}

export default ImageBox
