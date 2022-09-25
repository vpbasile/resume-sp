import NavBar from '../../shared-components/NavBar';

export function HomePage() {
  return (
    <div className="App container">
      <header className="App-header row">
        <h1>Homepage</h1>
      </header>
      <main className="App-main row">
        <NavBar />
      </main>
    </div>
  );
}
