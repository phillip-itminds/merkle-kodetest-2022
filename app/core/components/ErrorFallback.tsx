import { FC } from "react"

export type ErrorFallbackProps = {
  error: any
  resetErrorBoundary: () => void
}

export const ErrorFallback: FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <div>Woops...</div>
      <pre>{error.message}</pre>
      <button
        onClick={() => {
          // Reset the error boundary to try again.
          resetErrorBoundary()
        }}
      >
        Try again
      </button>
    </div>
  )
}
