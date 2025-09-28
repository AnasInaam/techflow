const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/login-project';

async function connectToDatabase() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('login-project');
  return { db, client };
}

async function seedDatabase() {
  let client;
  try {
    const { db, client: dbClient } = await connectToDatabase();
    client = dbClient;

    // Check if sample user already exists
    const existingUser = await db.collection('users').findOne({ email: 'demo@techflow.com' });
    
    if (existingUser) {
      console.log('✅ Sample user already exists');
      console.log('📧 Email: demo@techflow.com');
      console.log('🔑 Password: password123');
      return;
    }

    // Create sample user
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash('password123', saltRounds);

    const sampleUser = {
      firstName: 'Demo',
      lastName: 'User',
      email: 'demo@techflow.com',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true
    };

    const result = await db.collection('users').insertOne(sampleUser);
    
    if (result.acknowledged) {
      console.log('✅ Sample user created successfully!');
      console.log('📧 Email: demo@techflow.com');
      console.log('🔑 Password: password123');
    } else {
      console.log('❌ Failed to create sample user');
    }

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    if (client) {
      await client.close();
    }
  }
}

// Run the seed function
seedDatabase().then(() => {
  console.log('Database seeding completed');
  process.exit(0);
}).catch((error) => {
  console.error('Database seeding failed:', error);
  process.exit(1);
});