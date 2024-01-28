class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
  
    calculateMean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    calculateMedian() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    calculateMode() {
      const frequencyMap = new Map();
      this.data.forEach(value => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });
  
      let mode;
      let maxFrequency = 0;
  
      frequencyMap.forEach((frequency, value) => {
        if (frequency > maxFrequency) {
          mode = value;
          maxFrequency = frequency;
        }
      });
  
      return mode;
    }
  
    // Measures of Dispersion
  
    calculateVariance() {
      const mean = this.calculateMean();
      const squaredDifferences = this.data.map(value => (value - mean) ** 2);
      const sumSquaredDifferences = squaredDifferences.reduce((acc, value) => acc + value, 0);
      return sumSquaredDifferences / this.data.length;
    }
  
    calculateStandardDeviation() {
      return Math.sqrt(this.calculateVariance());
    }
  
    calculateRange() {
      const max = Math.max(...this.data);
      const min = Math.min(...this.data);
      return max - min;
    }
  
    calculateInterquartileRange() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const q1 = this.calculateMedian(sortedData.slice(0, Math.floor(sortedData.length / 2)));
      const q3 = this.calculateMedian(sortedData.slice(Math.ceil(sortedData.length / 2)));
      return q3 - q1;
    }
  
    calculateMeanAbsoluteDeviation() {
      const mean = this.calculateMean();
      const absoluteDeviations = this.data.map(value => Math.abs(value - mean));
      return absoluteDeviations.reduce((acc, value) => acc + value, 0) / this.data.length;
    }
  }
  
  // Example usage:
  const data = [12, 7, 3, 9, 5, 4, 8, 6, 11, 10];
  const stats = new DescriptiveStatistics(data);
  
  console.log('Mean:', stats.calculateMean());
  console.log('Median:', stats.calculateMedian());
  console.log('Mode:', stats.calculateMode());
  
  console.log('Variance:', stats.calculateVariance());
  console.log('Standard Deviation:', stats.calculateStandardDeviation());
  console.log('Range:', stats.calculateRange());
  console.log('Interquartile Range:', stats.calculateInterquartileRange());
  console.log('Mean Absolute Deviation:', stats.calculateMeanAbsoluteDeviation());
  