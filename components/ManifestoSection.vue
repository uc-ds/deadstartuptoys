<template>
  <section class="min-h-screen manifesto-bg sm:pt-72 pt-96 lg:px-0 md:px-6 px-4 md:pb-28 pb-40 flex items-center">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="xl:w-full lg:w-3/4 mx-auto flex justify-center">
          <img src="/img/manifesto-text.png" alt="" class="md:block hidden" />
          <img
            src="/img/manifesto-text-mob.png"
            alt=""
            class="md:hidden block"
          />
        </div>
        <div
          class="
            lg:w-4/5
            mx-auto
            w-full
            flex
            lg:flex-nowrap
            lg:space-x-6
            flex-wrap
            mt-10
          "
        >
          <div class="lg:w-1/2 w-full lg:mb-0 mb-6">
            <p
              class="
                text-lg text-shadow
                filter
                drop-shadow-text-dense
                sfcompact-font
              "
            >
              If slow evolution - the accumulation of tiny changes over geologic
              time - is insufficient to account for all evolutionary leaps, so
              the theory goes, then perhaps there exist macroevolutionary jumps
              due to large mutations that create organisms with significant
              advantages over their erstwhile species. These macro-mutant
              organisms are dubbed Hopeful Monsters, born without kin or kind,
              seeking that slimmest improbable chance to thrive. <br />
              <br />
              This is by no means widely accepted - common criticisms point
              rightly to the fact that macroevolutionary mutations are almost
              invariably lethal, or render the mutant sterile, unable to
              propagate their mutation forward. <br />
              <br />
              This all, looking at the history of fledgling startups born from
              the roiling primordial soup of our VC bubble, sounds about right.
              Fuck Social Darwinism, but how about Corporate Goldschmidtism?
            </p>
          </div>
          <div class="lg:w-1/2 w-full">
            <p
              class="
                text-lg text-shadow
                filter
                drop-shadow-text-dense
                sfcompact-font
              "
            >
              A lineup of Dead Startup Toys on a shelf is the equivalent of a
              line of heads on stakes, or the macabre pyramids of Kublai Khan.
              Not exactly triumphant, given that companies fail through no real
              fault of our own, as consumers– but schadenfreude is a small
              sadism, after all. <br />
              <br />
              This is not a memorialization. Let Thernanos burn and never taste
              the light of heaven. Still we are perhaps honor-bound to
              acknowledge the mutants, for they accomplish a certain weirding of
              the world that we aspire to. Dead Startup Toys are not a
              resurrection, to be sure, but perhaps they are a form of
              necromancy: we celebrate their pale shadows, deprived of their
              original context. <br />
              <br />
              Behold these beautiful mutants, hoisted on petards of their own
              solid-aluminum-unibody construction. We salute these voyagers,
              flown too close to the blood-red suns of their own fever dreams,
              on wings made of oh-so-flammable dollar bills, whose inexplicably
              sincere hopes became our most surreal entertainment..
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class ManifestoSection extends Vue {}
</script>

<style scoped lang="scss">
.manifesto-bg {
  background: url("/img/manifesto-bg.png") center / cover no-repeat;
}
</style>
