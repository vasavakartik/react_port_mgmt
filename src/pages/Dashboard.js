import React from 'react'

function Dashboard() {
  return (
      <>
      <h1 className="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>
      <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

  <h1>User Subscription</h1>

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
    
    
  </tbody>
</table>
      </>
    
    
    
  )
}

export default Dashboard