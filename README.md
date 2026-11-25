# Pigeon Pitch, One Line

[![make.fun](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Rank](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/cholick0/pigeon-pitch/rank.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf/leaderboard)
[![Reward](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/cholick0/pigeon-pitch/reward.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf)

A make.fun bounty entry: the one-line elevator pitch a city pigeon gives investors for its startup.

## Entry

> I'm raising a seed round for Coo — same-day delivery by pigeon: no traffic, no surge pricing, and my couriers work for crumbs.

## How it works

`main.ts` writes the pitch to `/output/entry.txt` and validates it against the competition gate (UTF-8 text, 1–200 characters, a single non-blank line), then reads the file back and verifies it byte-for-byte.

```sh
node main.ts
```
