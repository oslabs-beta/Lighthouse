import { users } from '../../database'; // mock database 

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                // Get data from your request
                const { username, password } = req.body;

                // Here is where you would check the database for the user
                // For simplicity, we will pretend 'users' is a list of users

                const user = users.find(user => user.username === username && user.password === password);

                if (!user) {
                    return res.status(400).json({ error: 'Invalid username or password' });
                }

                // If the user exists and password matches, then "log in" the user
                // Do not send password back
                const { ...userWithoutPassword } = user;
                return res.status(200).json(userWithoutPassword);
                
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
