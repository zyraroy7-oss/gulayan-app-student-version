import { useState } from 'react'
import { FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa'

function Records() {
  const [searchTerm, setSearchTerm] = useState('')

  const records = [
    { id: 1, name: 'Tomatoes', category: 'Vegetables', quantity: '50 kg', price: '₱80/kg', supplier: 'Farm Fresh Co.' },
    { id: 2, name: 'Lettuce', category: 'Vegetables', quantity: '30 kg', price: '₱60/kg', supplier: 'Green Valley' },
    { id: 3, name: 'Carrots', category: 'Root Crops', quantity: '40 kg', price: '₱70/kg', supplier: 'Farm Fresh Co.' },
    { id: 4, name: 'Cabbage', category: 'Vegetables', quantity: '25 kg', price: '₱50/kg', supplier: 'Organic Farms' },
    { id: 5, name: 'Potatoes', category: 'Root Crops', quantity: '60 kg', price: '₱65/kg', supplier: 'Mountain Harvest' },
    { id: 6, name: 'Spinach', category: 'Leafy Greens', quantity: '20 kg', price: '₱90/kg', supplier: 'Green Valley' }
  ]

  const filteredRecords = records.filter(record =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Records</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 flex items-center gap-2">
          <FaPlus />
          Add New Record
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Records Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-green-50">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Product Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Category</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Quantity</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Price</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Supplier</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record) => (
                <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm text-gray-800 font-medium">{record.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{record.category}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{record.quantity}</td>
                  <td className="py-4 px-6 text-sm text-gray-800 font-medium">{record.price}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{record.supplier}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredRecords.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No records found matching your search.
          </div>
        )}
      </div>
    </div>
  )
}

export default Records
