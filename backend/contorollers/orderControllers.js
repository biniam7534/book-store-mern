import Order from "../models/orderModel.js";

// @desc    Create a new order
// @route   POST /api/orders
export const createOrder = async (req, res) => {
    try {
        const { orderId, date, amount, payment, status } = req.body;

        if (!orderId || !date || !amount || !payment) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        const newOrder = await Order.create({ orderId, date, amount, payment, status });

        return res.status(201).json(newOrder);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Get all orders
// @route   GET /api/orders
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});

        return res.status(200).json({
            count: orders.length,
            data: orders,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Get a single order by ID
// @route   GET /api/orders/:id
export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        return res.status(200).json(order);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Update an order by ID
// @route   PUT /api/orders/:id
export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        return res.status(200).json(updatedOrder);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

// @desc    Delete an order by ID
// @route   DELETE /api/orders/:id
export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await Order.findByIdAndDelete(id);

        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        return res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};
