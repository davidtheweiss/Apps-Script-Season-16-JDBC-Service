function myFunction() {
  const username = 'root'
  const password = 'test1234';
  const url = 'jdbc:google:mysql://axial-theater-304520:us-east1:apps-script'
  const conn = Jdbc.getCloudSqlConnection(url, username, password);
  Logger.log(conn);
  conn.close();
}
