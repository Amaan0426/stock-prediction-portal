import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [companyName, setCompanyName] = useState("");


  // Fetch existing stocks
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axiosInstance.get("/stocks/");
        setStocks(response.data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };
    fetchStocks();
  }, []);

  // Add new stock
  const handleAddStock = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/stocks/", {
        symbol: symbol,
      });
      setStocks([...stocks, response.data]); // update UI
      setSymbol("");
    } catch (error) {
      console.error("Error adding stock:", error);
    }
  };

  // Delete stock
  const handleDeleteStock = async (id) => {
    try {
      await axiosInstance.delete(`/stocks/${id}/`);
      setStocks(stocks.filter((stock) => stock.id !== id));
    } catch (error) {
      console.error("Error deleting stock:", error);
    }
  };

  return (
    <div className="container text-light mt-5">
      <h1 className="mb-4">📊 Stock Prediction Dashboard</h1>

      {/* Add Stock Form */}
      <form onSubmit={handleAddStock} className="mb-4">
        <input
            type="text"
            placeholder="Enter Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="form-control mb-2"
        />

        

        <button type="submit" className="btn btn-success">
          ➕ Add Stock
        </button>
      </form>

      {/* Stock Table */}
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Prediction</th>
            <th>Added At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.symbol}</td>
              <td>{stock.prediction}</td>
              <td>{new Date(stock.created_at).toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteStock(stock.id)}
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
