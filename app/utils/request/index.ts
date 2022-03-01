export const fetchGithubUrl = async <T>(url: string): Promise<Response> => {
  const res = await fetch(url, {
    headers: {
      accept: 'application/vnd.github.v3.json',
      Authorization: `token ${process.env.PRIVATE_KEY}`
    }
  })

  return res
}
