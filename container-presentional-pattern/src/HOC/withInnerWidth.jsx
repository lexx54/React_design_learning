import { useEffect, useState, FC } from "react";

const withInnerWIdth = Component => props => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleResize = () => setInnerWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    // this emulate the componentWillUnmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])// <- this emulate the component didMount

  return <Component {...props} innerWidth={innerWidth} />
}

export default withInnerWIdth;