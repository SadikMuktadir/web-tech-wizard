const Blogs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-7xl w-full">
          <img
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
            alt="Mountain"
            className="w-full h-64 object-cover"
          ></img>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Beautiful Mountain View
            </h2>
            <p className="text-gray-700 leading-tight mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eu sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex
              at turpis rutrum viverra.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                ></img>
                <span className="text-gray-800 font-semibold">John Doe</span>
              </div>
              <span className="text-gray-600">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
