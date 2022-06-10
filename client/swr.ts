class StatusError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export const swrFetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    const body = await res.json()
    throw new StatusError(
      'An error occurred while fetching the data.',
      res.status || body.statusCode
    )
  }

  if (res.status === 401) {
    return null
  }

  return res.json()
}
