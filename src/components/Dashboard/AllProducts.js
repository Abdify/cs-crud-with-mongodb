import { Dropdown, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  }, [refresh]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        toast.success(data.message);
        setRefresh(!refresh);
      } else {
        toast.error(data.error);
      }
    }).catch(err => toast.error(err.message))
  };

  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/dashboard/product/edit/${id}`)
  }

  console.log(products);
  return (
    <div className="w-full">
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
            Actions
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product) => {
            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                  <img className="w-20" src={product.image} alt={product.name} />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.name}
                </Table.Cell>
                <Table.Cell>${product.price}</Table.Cell>
                <Table.Cell>
                  <Dropdown label="Action" arrowIcon={false}>
                    <Dropdown.Item onClick={() => handleEdit(product._id)}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete(product._id)}>Delete</Dropdown.Item>
                  </Dropdown>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllProducts;
