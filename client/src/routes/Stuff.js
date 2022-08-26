import React from "react";
 
function Stuff() {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return (
      <div>
        <h2>STUFF</h2>
        <p>This is the stuff page.</p>
        <p>{!data ? "Loading data..." : data}</p>
      </div>
    );
}

 
export default Stuff;