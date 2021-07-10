function myFunction() {
  const username = 'root';
  const password = 'test1234';
  const url = 'jdbc:google:mysql://axial-theater-304520:us-east1:apps-script/weiss_terminal'
  const conn = Jdbc.getCloudSqlConnection(url, username, password);

  const statement = conn.createStatement();
  const sql1 = 'SELECT * FROM flights;';
  const sql2 = `UPDATE flights SET airline='Delta' WHERE flight_id='abc123';`;


  // Results Set from Query Statement Execution
  let query = statement.executeQuery(sql1);
  let arr = [];

  while(query.next()) {
    arr.push([
      query.getString(1),
      query.getString(2),
      query.getString(3),
      query.getDate(4),
      query.getDate(5),
      query.getDouble(6),
      query.getString(7),
      query.getBoolean('on_time'),
    ]);
  }

  Logger.log(arr);
  Logger.log(arr[0][5] + arr[1][5]);


  // Results Set from General Statement Execution
  let command = statement.execute(sql2);
  if (command) {
    let arr = [];
    let rs = statement.getResultSet();

    while(rs.next()) {
      arr.push([
        rs.getString(1),
        rs.getString(2),
        rs.getString(3),
        rs.getDate(4),
        rs.getDate(5),
        rs.getDouble(6),
        rs.getString(7),
        rs.getBoolean('on_time'),
      ]);
    }

    Logger.log(arr);
    Logger.log(arr[0][5] + arr[1][5]);
  } else {
    Logger.log('No Results Set was returned')
  }

  query.close();
  statement.close();
  conn.close();
}
