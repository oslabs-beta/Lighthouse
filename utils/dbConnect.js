import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  // Use an existing DB connection, if it exists
  if (connection.isConnected) {
    return;
  }

  // Use new database connection
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw new Error('Failed to connect to the database.');
  }
}

export default dbConnect;
