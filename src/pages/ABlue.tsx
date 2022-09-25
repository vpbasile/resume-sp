import Lorem from '../shared-components/lorem';
import NavBar from '../shared-components/NavBar';

export function Blue() {
  return (
    <div className="App container bg-primary text-light">
      <header className="App-header row">
        <div className="col-9">
          <h1>Blue Page</h1>
        </div>
        <NavBar />
      </header>
      <main className="App-main row">
        <Lorem />
      </main>
    </div>
  );
}
