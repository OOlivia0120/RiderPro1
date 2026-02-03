// RiderPro Rankings - Virtual Rider Data
const riders = [
    { name: "Marcus Chen", rating: 4.98, avatar: "MC", country: "Singapore", city: "Singapore", totalOrders: 2847, positiveReviews: 2831, negativeReviews: 16 },
    { name: "Sarah Johnson", rating: 4.96, avatar: "SJ", country: "USA", city: "New York", totalOrders: 3156, positiveReviews: 3145, negativeReviews: 11 },
    { name: "Ahmed Hassan", rating: 4.95, avatar: "AH", country: "UAE", city: "Dubai", totalOrders: 2634, positiveReviews: 2622, negativeReviews: 12 },
    { name: "Emily Rodriguez", rating: 4.93, avatar: "ER", country: "Spain", city: "Madrid", totalOrders: 2923, positiveReviews: 2908, negativeReviews: 15 },
    { name: "David Kim", rating: 4.92, avatar: "DK", country: "South Korea", city: "Seoul", totalOrders: 3401, positiveReviews: 3384, negativeReviews: 17 },
    { name: "Priya Patel", rating: 4.90, avatar: "PP", country: "India", city: "Mumbai", totalOrders: 2789, positiveReviews: 2775, negativeReviews: 14 },
    { name: "James Wilson", rating: 4.89, avatar: "JW", country: "UK", city: "London", totalOrders: 3245, positiveReviews: 3227, negativeReviews: 18 },
    { name: "Li Wei", rating: 4.88, avatar: "LW", country: "China", city: "Shanghai", totalOrders: 2956, positiveReviews: 2940, negativeReviews: 16 },
    { name: "Maria Garcia", rating: 4.86, avatar: "MG", country: "Mexico", city: "Mexico City", totalOrders: 2567, positiveReviews: 2552, negativeReviews: 15 },
    { name: "Mohammed Ali", rating: 4.85, avatar: "MA", country: "Egypt", city: "Cairo", totalOrders: 3087, positiveReviews: 3068, negativeReviews: 19 },
    { name: "Sophia Taylor", rating: 4.83, avatar: "ST", country: "Canada", city: "Toronto", totalOrders: 2834, positiveReviews: 2817, negativeReviews: 17 },
    { name: "Raj Kumar", rating: 4.82, avatar: "RK", country: "India", city: "Bangalore", totalOrders: 3198, positiveReviews: 3180, negativeReviews: 18 },
    { name: "Isabella Martinez", rating: 4.80, avatar: "IM", country: "Argentina", city: "Buenos Aires", totalOrders: 2456, positiveReviews: 2441, negativeReviews: 15 },
    { name: "Kevin Nguyen", rating: 4.79, avatar: "KN", country: "Vietnam", city: "Ho Chi Minh", totalOrders: 2912, positiveReviews: 2895, negativeReviews: 17 },
    { name: "Fatima Abbas", rating: 4.77, avatar: "FA", country: "Saudi Arabia", city: "Riyadh", totalOrders: 2678, positiveReviews: 2660, negativeReviews: 18 },
    { name: "Daniel Park", rating: 4.76, avatar: "DP", country: "South Korea", city: "Busan", totalOrders: 3034, positiveReviews: 3015, negativeReviews: 19 },
    { name: "Yuki Tanaka", rating: 4.75, avatar: "YT", country: "Japan", city: "Tokyo", totalOrders: 2845, positiveReviews: 2828, negativeReviews: 17 },
    { name: "Alex Thompson", rating: 4.73, avatar: "AT", country: "Australia", city: "Sydney", totalOrders: 2567, positiveReviews: 2549, negativeReviews: 18 },
    { name: "Olivia Brown", rating: 4.72, avatar: "OB", country: "USA", city: "Los Angeles", totalOrders: 2923, positiveReviews: 2904, negativeReviews: 19 },
    { name: "Carlos Santos", rating: 4.70, avatar: "CS", country: "Brazil", city: "São Paulo", totalOrders: 3156, positiveReviews: 3137, negativeReviews: 19 },
    { name: "Nina Kowalski", rating: 4.69, avatar: "NK", country: "Poland", city: "Warsaw", totalOrders: 2734, positiveReviews: 2589, negativeReviews: 145 },
    { name: "Ryan O'Connor", rating: 4.67, avatar: "RO", country: "Ireland", city: "Dublin", totalOrders: 2456, positiveReviews: 2312, negativeReviews: 144 },
    { name: "Aisha Mohammed", rating: 4.66, avatar: "AM", country: "Nigeria", city: "Lagos", totalOrders: 2812, positiveReviews: 2645, negativeReviews: 167 },
    { name: "Tom Anderson", rating: 4.64, avatar: "TA", country: "USA", city: "Chicago", totalOrders: 2989, positiveReviews: 2812, negativeReviews: 177 },
    { name: "Maya Singh", rating: 4.63, avatar: "MS", country: "India", city: "Delhi", totalOrders: 3201, positiveReviews: 3012, negativeReviews: 189 },
    { name: "Lucas Silva", rating: 4.61, avatar: "LS", country: "Brazil", city: "Rio de Janeiro", totalOrders: 2645, positiveReviews: 2478, negativeReviews: 167 },
    { name: "Emma Watson", rating: 4.60, avatar: "EW", country: "UK", city: "Manchester", totalOrders: 2523, positiveReviews: 2356, negativeReviews: 167 },
    { name: "Hassan Khalil", rating: 4.58, avatar: "HK", country: "Lebanon", city: "Beirut", totalOrders: 2756, positiveReviews: 2578, negativeReviews: 178 },
    { name: "Sophie Martin", rating: 4.57, avatar: "SM", country: "France", city: "Paris", totalOrders: 2834, positiveReviews: 2645, negativeReviews: 189 },
    { name: "Jin Park", rating: 4.55, avatar: "JP", country: "South Korea", city: "Incheon", totalOrders: 2967, positiveReviews: 2756, negativeReviews: 211 },
    { name: "Anna Ivanova", rating: 4.54, avatar: "AI", country: "Russia", city: "Moscow", totalOrders: 2512, positiveReviews: 2334, negativeReviews: 178 },
    { name: "Diego Fernandez", rating: 4.52, avatar: "DF", country: "Chile", city: "Santiago", totalOrders: 2689, positiveReviews: 2489, negativeReviews: 200 },
    { name: "Mia Lee", rating: 4.51, avatar: "ML", country: "USA", city: "San Francisco", totalOrders: 2845, positiveReviews: 2634, negativeReviews: 211 },
    { name: "Omar Rashid", rating: 4.49, avatar: "OR", country: "Pakistan", city: "Karachi", totalOrders: 3078, positiveReviews: 2834, negativeReviews: 244 },
    { name: "Zara Ahmed", rating: 4.48, avatar: "ZA", country: "Bangladesh", city: "Dhaka", totalOrders: 2756, positiveReviews: 2534, negativeReviews: 222 },
    { name: "Noah Williams", rating: 4.46, avatar: "NW", country: "Canada", city: "Vancouver", totalOrders: 2623, positiveReviews: 2401, negativeReviews: 222 },
    { name: "Leila Hassan", rating: 4.45, avatar: "LH", country: "Morocco", city: "Casablanca", totalOrders: 2478, positiveReviews: 2267, negativeReviews: 211 },
    { name: "Jack Robinson", rating: 4.43, avatar: "JR", country: "New Zealand", city: "Auckland", totalOrders: 2567, positiveReviews: 2334, negativeReviews: 233 },
    { name: "Amara Okafor", rating: 4.42, avatar: "AO", country: "South Africa", city: "Johannesburg", totalOrders: 2912, positiveReviews: 2645, negativeReviews: 267 },
    { name: "Ben Turner", rating: 4.40, avatar: "BT", country: "USA", city: "Miami", totalOrders: 2734, positiveReviews: 2478, negativeReviews: 256 }
];

// Current user for demo (simulated as logged in)
const currentUserId = 15; // Fatima Abbas

// Function to calculate comprehensive score
// Takes into account: rating (60%), positive review rate (30%), total orders (10%)
function calculateComprehensiveScore(rider) {
    const ratingScore = rider.rating * 0.6; // 60% weight on rating
    const positiveRate = (rider.positiveReviews / rider.totalOrders);
    const positiveScore = positiveRate * 5 * 0.3; // 30% weight on positive rate (normalized to 5-point scale)
    const orderScore = Math.min(rider.totalOrders / 3500, 1) * 5 * 0.1; // 10% weight on order volume (capped at 3500)

    return ratingScore + positiveScore + orderScore;
}

// Sort riders by comprehensive score
riders.sort((a, b) => {
    const scoreA = calculateComprehensiveScore(a);
    const scoreB = calculateComprehensiveScore(b);
    return scoreB - scoreA; // Descending order
});

// Function to generate star rating display
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '½';
    return stars;
}

// Function to get rank class for styling
function getRankClass(rank) {
    if (rank === 1) return 'rank-1';
    if (rank === 2) return 'rank-2';
    if (rank === 3) return 'rank-3';
    return '';
}

// Function to get rank medal
function getRankMedal(rank) {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return rank;
}

// Function to populate rankings table
function populateRankings() {
    const tbody = document.getElementById('rankingsBody');
    tbody.innerHTML = '';

    riders.forEach((rider, index) => {
        const rank = index + 1;
        const isTop3 = rank <= 3;
        const isCurrentUser = index === currentUserId;
        const needsTraining = rider.rating < 4.5;

        const row = document.createElement('tr');
        row.className = '';
        if (isTop3) row.classList.add('top-3');
        if (isCurrentUser) row.classList.add('current-user');
        if (needsTraining) row.classList.add('needs-training');

        const rankMedal = getRankMedal(rank);
        const rankClass = getRankClass(rank);
        const stars = getStarRating(rider.rating);

        row.innerHTML = `
            <td class="rank-cell">
                <span class="${rankClass}">${rankMedal}</span>
            </td>
            <td>
                <div class="rider-info">
                    <div class="rider-avatar">${rider.avatar}</div>
                    <div>
                        <div class="rider-name">
                            ${rider.name}
                            ${isCurrentUser ? '<span style="color: #2196F3; font-weight: bold;"> (You)</span>' : ''}
                            ${needsTraining ? '<span class="warning-badge">⚠️ TRAINING REQUIRED</span>' : ''}
                        </div>
                    </div>
                </div>
            </td>
            <td class="location-cell">
                <div class="location-info">
                    <div style="font-weight: 600; color: #333;">🌍 ${rider.country}</div>
                    <div style="font-size: 13px; color: #666;">${rider.city}</div>
                </div>
            </td>
            <td style="text-align: center; font-weight: 600; color: #4db6ac;">${rider.totalOrders.toLocaleString()}</td>
            <td style="text-align: center; font-weight: 600; color: #4CAF50;">${rider.positiveReviews.toLocaleString()}</td>
            <td style="text-align: center; font-weight: 600; color: #f44336;">${rider.negativeReviews}</td>
            <td class="score-cell">
                <div class="score-display">
                    <span class="score-number">${rider.rating.toFixed(2)}</span>
                    <span class="score-stars">${stars}</span>
                </div>
            </td>
        `;

        tbody.appendChild(row);
    });
}

// Function to update time display
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('lastUpdateTime').textContent = timeString;
}

// Function to simulate live updates (slightly adjust ratings)
function simulateLiveUpdate() {
    // Randomly adjust 1-3 riders' ratings and orders slightly
    const numUpdates = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < numUpdates; i++) {
        const randomIndex = Math.floor(Math.random() * riders.length);
        const ratingChange = (Math.random() - 0.5) * 0.02; // Small change between -0.01 and +0.01
        const orderChange = Math.floor(Math.random() * 5); // Add 0-4 orders

        riders[randomIndex].rating = Math.max(0, Math.min(5, riders[randomIndex].rating + ratingChange));
        riders[randomIndex].totalOrders += orderChange;

        // Randomly add positive or negative reviews
        if (Math.random() > 0.2) { // 80% chance of positive review
            riders[randomIndex].positiveReviews += orderChange;
        } else {
            riders[randomIndex].negativeReviews += Math.floor(orderChange / 2);
        }
    }

    // Re-sort riders by comprehensive score
    riders.sort((a, b) => {
        const scoreA = calculateComprehensiveScore(a);
        const scoreB = calculateComprehensiveScore(b);
        return scoreB - scoreA;
    });

    // Update display
    populateRankings();
    updateTime();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initial population
    populateRankings();
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);

    // Simulate live ranking updates every 10 seconds
    setInterval(simulateLiveUpdate, 10000);

    // Add smooth scroll to current user if exists
    setTimeout(() => {
        const currentUserRow = document.querySelector('.current-user');
        if (currentUserRow) {
            currentUserRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 500);
});
