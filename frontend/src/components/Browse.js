import React from 'react';

export function BrowsePage({signOut}) {
    const flavors = [
        { id: 1, name: 'Classic Vanilla', description: 'Smooth and creamy vanilla ice cream.' },
        { id: 2, name: 'Decadent Chocolate', description: 'Rich and indulgent chocolate ice cream.' },
        { id: 3, name: 'Refreshing Strawberry', description: 'Fresh and fruity strawberry ice cream.' },
        { id: 4, name: 'Caramel Swirl', description: 'Creamy caramel ice cream with a caramel swirl.' },
        { id: 5, name: 'Mint Chocolate Chip', description: 'Refreshing mint ice cream with chocolate chips.' },
        { id: 6, name: 'Cookie Dough', description: 'Vanilla ice cream with chunks of cookie dough.' },
    ];

    const handleSignOut = () => {
        // Implement signout logic here
        console.log('User signed out');
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-8">
                <div className="flex justify-end mb-4">
                    <button
                        onClick={signOut}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign Out
                    </button>
                </div>
                <h1 className="text-3xl font-bold text-center mb-8">Browse Our Ice Cream Flavors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {flavors.map(flavor => (
                        <div key={flavor.id} className="bg-white shadow-md p-4 rounded-lg">
                            <h2 className="text-xl font-bold">{flavor.name}</h2>
                            <p className="text-gray-700">{flavor.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

