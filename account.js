const mongodbUrl = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.xlism.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
export default mongodbUrl;
