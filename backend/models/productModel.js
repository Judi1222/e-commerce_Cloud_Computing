const { db } = require('../config/firebaseConfig');

class Product {
  static async getAllProducts() {
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  static async getProductById(id) {
    const doc = await db.collection('products').doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  }
}

module.exports = Product;