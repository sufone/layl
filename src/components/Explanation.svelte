
<ol>
  <li>Share location only your first time</li>
  <li>Your data stays on your device</li>
</ol>

<style>

ol {
  list-style: none;
  counter-reset: my-awesome-counter;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}
ol li {
  counter-increment: my-awesome-counter;
  display: flex;
  width: 50%;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}
ol li::before {
  content: counter(my-awesome-counter);
  font-weight: bold;
  font-size: 3rem;
  margin-right: -0.5rem;
  line-height: 1;
  color: #67b6ff6c;
  /* color: #ff676781 */
}
</style>