import React from 'react'

const UserSubs = () => {
  return (
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Subscribe Date</th>
      <th scope="col">Exp Date</th>
      <th scope="col">Is Advance Renew</th>
      <th scope="col">Advance Renew Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>12-01-2022</td>
      <td>13-02-2022</td>
      <td className="badge bg-success">Yes</td>
      <td>13-04-2022</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>12-01-2022</td>
      <td>13-02-2022</td>
      <td className="badge bg-success">Yes</td>
      <td>13-04-2022</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>12-01-2022</td>
      <td>13-02-2022</td>
      <td className="badge bg-danger">No</td>
      <td>13-04-2022</td>
      <td></td>
    </tr>
    
    
  </tbody>
</table>
  )
}

export default UserSubs