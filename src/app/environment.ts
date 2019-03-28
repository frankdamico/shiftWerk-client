import { HttpHeaders } from '@angular/common/http';

// const serverUrl = 'http://35.185.77.220:4000';
const serverUrl = 'http://localhost:4000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export { serverUrl, httpOptions };
