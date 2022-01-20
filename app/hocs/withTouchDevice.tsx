export const withTouchDevice = (WrappedComponent, WrappingComponent) => {
  const isTouchDevice = window.matchMedia("(hover: none)").matches

  return (props) =>
    isTouchDevice ? (
      <WrappingComponent {...props}>
        <WrappedComponent {...props} />
      </WrappingComponent>
    ) : (
      <WrappedComponent {...props} />
    )
}
