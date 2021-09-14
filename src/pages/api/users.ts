import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Ari'},
    {id: 2, name: 'Moretti'},
    {id: 3, name: 'Anderson'},
    {id: 4, name: 'Leires'},
  ]

  return response.json(users)
}