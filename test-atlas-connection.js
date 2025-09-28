const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function testConnection() {
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    console.error('❌ MONGODB_URI not found in .env.local');
    console.log('💡 Make sure your .env.local file has the MONGODB_URI variable set');
    return;
  }

  console.log('🔄 Testing MongoDB connection...');
  console.log('📍 URI:', uri.replace(/:([^:@]+)@/, ':****@')); // Hide password in log
  
  const client = new MongoClient(uri);
  
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('✅ Successfully connected to MongoDB!');
    
    // Test database operations
    const db = client.db('login-project');
    const collections = await db.listCollections().toArray();
    console.log('📂 Available collections:', collections.map(c => c.name));
    
    // Check for users collection
    const userCount = await db.collection('users').countDocuments();
    console.log('👥 Total users in database:', userCount);
    
    if (userCount > 0) {
      // Show sample user (without password)
      const sampleUser = await db.collection('users').findOne(
        {}, 
        { projection: { password: 0 } }
      );
      console.log('👤 Sample user:', sampleUser);
    }
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.log('\n💡 Common fixes:');
    console.log('   1. Check your username and password in the connection string');
    console.log('   2. Ensure IP address 0.0.0.0/0 is whitelisted in Atlas');
    console.log('   3. Verify the database user has read/write permissions');
    console.log('   4. Make sure your cluster is not paused');
  } finally {
    await client.close();
    console.log('🔌 Connection closed.');
  }
}

// Run the test
testConnection().then(() => {
  console.log('\n🎯 Connection test completed!');
  process.exit(0);
}).catch(error => {
  console.error('💥 Test failed:', error);
  process.exit(1);
});